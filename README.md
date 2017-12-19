### telnyx-blog

<img src="https://github.com/cantyjeffrey/telnyx-blog/raw/master/static/demo.gif" width="200"/>

#### Installation

Install dependencies and run:

```bash
yarn
yarn dev
```

---

#### Business Requirements

* [x] List all **Posts** and associated data: `title`, `author`, `date`, and `description`.
* [x] Sort **Posts** by `publish_date`.
* [x] Users can view an individual **Post** in a separate page.
* [x] Users can view **Comments** for a **Post**.
* [x] Users can add **Comment** to a **Post**. (Partial Implementation)

#### Technical Requirements

* [x] Two or more distinct components demonstrating component hierarchy.
* [x] At least one service that interfaces with the included REST API.
* [x] At least one unit test.

### Notes

This challenge has been timeboxed at 3hrs, and ended with basic
commenting functionality implemented.

A comment can be created, but the re-fetching of data when a comment has been submitted has yet to be implemented. Furthermore, the ability to to comment on other users' comments has yet to be implemented.
