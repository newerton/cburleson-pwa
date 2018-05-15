# How to prepare and publish a release

- Ensure that no `console.log` statements exist in your code!
- `npm version <update_type>` where release type is one of, `patch`, `minor`, or `major`.
- Commit source with commit message "Release X.X.X"
- Execute `npm run build`
- Copy contents of `www` to codyburleson.www
- Commit `codyburleson.www` as "Publish X.X.X"
