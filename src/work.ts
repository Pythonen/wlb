import { LaunchProps, showHUD } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export default async function main(props: LaunchProps) {
  const { folder } = props.arguments
  await runAppleScript(`
    tell application "Alacritty"
      activate
      tell application "System Events" to keystroke "work" -- this is my alias, won't work for you
      tell application "System Events" to key code 36
      delay 1.5
      tell application "System Events" to keystroke "cd ${folder}"
      tell application "System Events" to key code 36
      delay 1.5
      tell application "System Events" to keystroke "tmux"
      tell application "System Events" to key code 36
      delay 1.5
    end tell
    `)
  await showHUD("We got this!")
}
