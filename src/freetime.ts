import { showHUD } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function main() {
  await runAppleScript(`
    tell application "Code" to if it is running then quit
    tell application "Alacritty" to if it is running then quit
    `)
  await showHUD("Off you go, have fun!")

}
