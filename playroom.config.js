module.exports = {
  components: "@kiwicom/orbit-components/lib",
  outputPath: "./public",
  exampleCode: `
<Stack align="center" direction="column">
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
  <ButtonLink
    size="small"
    circled
    external
    href="https://github.com/RobinCsl/orbit-components-x-playroom"
   >
    ✨ Source on GitHub
   </ButtonLink>
  <Stack spacing="tight" direction="row">
    <Card>
      <CardSection>
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
      </CardSection>
    </Card>
  </Stack>
</Stack>`
};
