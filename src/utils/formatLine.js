import { RESERVED_LABELS, STORY_TYPES } from '../constants';
import formatStyling from './formatStyling';
import capitalizeName from './capitalizeName';

/**
 * Helper function for convertText that formats each dialogue line.
 * @param {object} templates
 * @param {object} renders
 */

export default function formatLine({
  templates,
  renders,
  outputObj,
  storyType,
  tlNotes,
}) {
  let currentName = ''; // needed for case where dialogue has name on every line
  return (p) => {
    const line = p.textContent.replace(/&nbsp;/g, ' ').trim(); // ignore text styling while evaluating lines
    if (line === '') return line; // ignore empty lines

    if (isFileName(line)) {
      currentName = ''; // since its new section
      return templates.cgRender(line);
    }

    if (isPart(line)) {
      outputObj.partCount += 1;
      if (outputObj.partCount === 1) {
        outputObj.output = outputObj.output.replace(
          templates.tabberHeaderPlaceholder(),
          templates.tableEnd() +
            templates.tabberHeader() +
            templates.firstPartLine() +
            templates.tableStart(),
        );
        return '';
      } else {
        currentName = '';
        return (
          templates.tableEnd() +
          templates.partLine(outputObj.partCount) +
          templates.tableStart()
        );
      }
    }
    // -----PROCESS HEADINGS OR DIALOGUE LINES-----

    p.innerHTML = formatTlMarker({ line: p.innerHTML, outputObj, tlNotes });

    // TODO: handle dialogue lines that simply have a colon lol
    if (!line.includes(':')) {
      return `\n${formatStyling(p).innerHTML}\n\n`;
    }

    const label = line.split(':')[0];
    // -----FILTER OUT HEADING LINES-----
    if (label.trim().toUpperCase() === RESERVED_LABELS.LOCATION) {
      currentName = ''; // since its new section
      return templates.locationHeading(
        line.slice(line.indexOf(':') + 1).trim(),
      );
    }
    if (label.trim().toUpperCase() === RESERVED_LABELS.HEADING) {
      currentName = ''; // since its new section
      return templates.heading(line.slice(line.indexOf(':') + 1).trim());
    }
    // TODO: handle choice dialogue
    // -----FINALLY PROCESS DIALOGUE LINES WITH LABELS-----
    // evaluate text inside first node of <p> tag
    // might be an element (has styling) or a text node (no styling)
    // so use textContent instead of innerHTML or innerText
    let contents = p.childNodes[0].textContent;
    // remove firstWord (has colon) in case of <strong>Arashi:</strong> line
    // and then try label in case of <strong>Arashi</strong>: line
    // ERROR: this means colon doesn't get removed if it's not styled....
    // TODO: find a better way to deal with styling on label
    const originalContents = contents;
    contents = contents.replace(label + ':', '');
    if (contents === originalContents) {
      contents = contents.replace(label, '');
    }
    if (contents.trim().length === 0) {
      p.childNodes[0].remove();
    } else {
      // if first ChildNode was just the label then remove node
      // set ChildNode HTML
      p.childNodes[0].textContent = contents;
    }
    const newLine = formatStyling(p).innerHTML.trim();
    if (label !== currentName) {
      // if new character is speaking
      currentName = label;
      const name = capitalizeName(currentName);
      if (renders[name]) {
        return templates.dialogueLine(renders[name], newLine);
      } else {
        return templates.npcDialogueLine(currentName, newLine);
      }
    } else {
      return `\n${newLine}\n\n`;
    }
  };
}

/**
 * Check if a dialogue line is actually an image file name
 * @param {string} line
 * @return {boolean}
 */
export function isFileName(line) {
  const extensions = ['.png', '.gif', '.jpg', '.jpeg', '.ico', '.pdf', '.svg'];
  for (let i = 0; i < extensions.length; i++) {
    if (line.toLowerCase().endsWith(extensions[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Check if a dialogue line is actually indicating a new part
 * for a personal story
 * @param {string} line
 * @return {boolean}
 */
function isPart(line) {
  return line.trim().match(/^PART \d/i);
}

function formatTlMarker({ line, outputObj, tlNotes }) {
  const markers = line.match(/\[\d+\]/g);
  markers?.forEach((marker) => {
    const tlCode = `<ref>${tlNotes[outputObj.tlNotesCount]}</ref>`;
    line = line.replace(marker, tlCode);
    outputObj.tlNotesCount += 1;
  });
  return line;
}
