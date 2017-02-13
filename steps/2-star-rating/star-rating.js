const innerHtml = `
      <style>
         star-rating {
           display: flex;
           align-items: center;
           justify-content: center;
           width: 100%;
         }

         star-rating .star {
            display: inline-block;
            height: 36px;
            width: 36px;
            cursor: pointer;
            background: rgba(255,255,255,0) url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjQ0NDQ0NDIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05IDExLjNsMy43MSAyLjctMS40Mi00LjM2TDE1IDdoLTQuNTVMOSAyLjUgNy41NSA3SDNsMy43MSAyLjY0TDUuMjkgMTR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDE4djE4SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==) no-repeat center center;
            background-size: cover;
         }

         star-rating .star.selected {
           background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRjFDNDBGIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05IDExLjNsMy43MSAyLjctMS40Mi00LjM2TDE1IDdoLTQuNTVMOSAyLjUgNy41NSA3SDNsMy43MSAyLjY0TDUuMjkgMTR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDE4djE4SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==);
         }

      </style>

      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>`;

class StarRating extends HTMLElement {
  attachedCallback() {
    this.innerHTML = innerHtml;
  }
}

document.registerElement("star-rating", StarRating);
