/* eslint-disable no-redeclare */
import React, { Suspense } from "react";
import ReactDOM from "react-dom";

class fastModal {
  start = () => {
    const div = document.createElement("div");
    div.dataset.formGenerator = "";

    if (!document.body) {
      return undefined;
    }
    document.body.appendChild(div);

    this.$$div = div;
    return this;
  };

  end = () => {
    ReactDOM.unmountComponentAtNode(this.$$div);
    this.$$div.remove();
    return this.$$returnValue;
  };

  setValues = (v) => {
    this.$$returnValue = v;
  };

  static formGenerator = async (props) => {
    return await new fastModal().FormGenerator(props);
  };

  Custom = async (data) => {
    this.start();
    console.log(data);
    await new Promise((resolve, reject) => {
      ReactDOM.render(
        <>
          <Suspense>
            <div id="modal-root"></div>
            {data.children(resolve)}
          </Suspense>
        </>,
        this.$$div
      );
    });
    return this.end();
  };

  static custom = async (data) => {
    return await new fastModal().Custom(data);
  };
}

export { fastModal };
