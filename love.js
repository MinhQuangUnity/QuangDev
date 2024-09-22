/***
 * Bilibili: codeArt
 ***/
import { App, THREE } from "./App.js";
import HeartObject from "./HeartObject.js";
import TextPrimitive from "./TextPrimitive.js";
import SphereObject from "./SphereObject.js";

const app = new App(new THREE.Vector3(0, 0, 40));

// const text = new TextPrimitive("ThuongE");
// text.onLoad = () => {
//   text.geometry.computeBoundingBox();
//   const max = text.geometry.boundingBox.max;
//   text.position.set(-max.x / 2, -max.y / 2, -1);
//   text.material.color = new THREE.Color(250 / 255.0, 179 / 255.0, 205 / 255.0);
// };
// app.addView(text);

// Dòng text thứ nhất: "ThuongE"
const text1 = new TextPrimitive("ThuongE");
text1.onLoad = () => {
  text1.geometry.computeBoundingBox();
  const max1 = text1.geometry.boundingBox.max;
  text1.position.set(-max1.x / 2, -max1.y / 2, -1);
  text1.material.color = new THREE.Color(250 / 255.0, 179 / 255.0, 205 / 255.0);
};
app.addView(text1);

// Dòng text thứ hai: "BeMy"
const text2 = new TextPrimitive("BeMy");
text2.onLoad = () => {
  text2.geometry.computeBoundingBox();
  const max2 = text2.geometry.boundingBox.max;
  text2.position.set(-max2.x / 2, -max2.y / 2 - 1.5, -1); // Đặt vị trí phía dưới dòng "ThuongE"
  text2.material.color = new THREE.Color(250 / 255.0, 179 / 255.0, 205 / 255.0);
};
app.addView(text2);

const sphere = new SphereObject();
sphere.translateY(3);
app.addView(sphere);

const innerHeart = new HeartObject(true);
innerHeart.rotateZ(Math.PI);
innerHeart.scale.set(0.8, 0.85, 1);
app.addView(innerHeart);

const outsideHeart = new HeartObject(false);
outsideHeart.rotateZ(Math.PI);
outsideHeart.scale.set(0.95, 1, 1);
app.addView(outsideHeart);

app.startAnimation((time) => {
  if (time % 100) {
    sphere.rotateY(8);
  }

  innerHeart.animate(time);
  innerHeart.geometry.attributes.position.needsUpdate = true;
  outsideHeart.animate(time);
  outsideHeart.geometry.attributes.position.needsUpdate = true;
});

// const loader = new FontLoader();
// let font = undefined;
// loader.load("fonts/optimer_regular.typeface.json", function (response) {
//   // font = response;

//   // const textGeo = new TextGeometry("miao", {
//   //   font: font,
//   //   size: 1,
//   //   height: 1,
//   //   curveSegments: 10,
//   //   bevelEnabled: false,
//   // });
//   // textGeo.computeBoundingBox();

//   // const text = new Mesh(
//   //   textGeo,
//   //   new THREE.MeshBasicMaterial({
//   //     color: new THREE.Color(250 / 255.0, 179 / 255.0, 205 / 255.0),
//   //     transparent: true,
//   //     opacity: 0.75,
//   //   })
//   // );

//   // const max = text.geometry.boundingBox.max;
//   // text.position.set(-max.x / 2, -max.y / 2, -1);
//   // text.material.color = new THREE.Color(250 / 255.0, 179 / 255.0, 205 / 255.0);
// });
