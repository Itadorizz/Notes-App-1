class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["title", "body"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .note {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        .note-title {
          font-weight: bold;
          margin-bottom: 5px;
        }
      </style>
      <div class="note">
        <div class="note-title">${this.getAttribute("title")}</div>
        <div class="note-body">${this.getAttribute("body")}</div>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
