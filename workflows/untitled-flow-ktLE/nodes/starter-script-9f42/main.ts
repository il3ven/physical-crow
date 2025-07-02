export default async function (
  { name }: NodeInputs, // Access values of node input parameters
  {
    logging, // Utility for logging during execution
    env, // Environment variable management utility
    getBuildShipFile, // File handling utility
  }: NodeScriptOptions,
): NodeOutput {

  /* Log execution values */
  logging.log("Input:", name);

  /* Environment variables (defaults to "workflow" scope, add "project" as second argument for project scope) */
  // await env.set({name: "key", value: "val"});
  // const val = env.get("key");
  // await env.delete("key");

  // File handling example
  // const file = await getBuildShipFile({
  //   type: 'local-file',
  //   file: '/path/to/file.png',
  //   mimeType: 'image/png',
  // });
  // const buffer = await file.convertTo("file-buffer")();

  // Return matches node output configuration
  return "Output: " + name;
}
