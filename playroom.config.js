module.exports = {
  components: "@kiwicom/orbit-components/lib",
  outputPath: "./public",
  exampleCode: `
<Stack>
  <Heading type="title2">
    <TextLink href="https://orbit.kiwi">
      <code>@kiwicom/orbit-components</code>
    </TextLink>
    {" + "}
    <TextLink href="https://github.com/seek-oss/playroom">
      <code>playroom</code>
    </TextLink>{" = "}
    🔥
  </Heading>
  <Stack spacing="tight" direction="row">
    {[
      ["Orbit", "success"],
      ["is", "warning"],
      ["great", "info"],
      ["🚀", "critical"]
    ].map(([label, type]) => (
      <Badge type={type}>
        {label}
      </Badge>
    ))}
  </Stack>
</Stack>
`
};
