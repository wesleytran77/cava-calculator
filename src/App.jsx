import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Define nutritional information for each item per serving
  const itemMacros = {
    1: { calories: 20, fat: 0, protein: 3, carbs: 3 }, //Spinach
    2: { calories: 20, fat: 0, protein: 2, carbs: 3 }, //Arugala
    3: { calories: 20, fat: 0, protein: 1, carbs: 4 }, // Romaine Lettuce
    4: { calories: 20, fat: 0, protein: 1, carbs: 4 }, // Splendid Greens
    5: { calories: 40, fat: 0, protein: 3, carbs: 8 }, // supergreens
    6: { calories: 290, fat: 6, protein: 6, carbs: 54 }, // saffron
    7: { calories: 310, fat: 10, protein: 8, carbs: 48 }, // brown rice
    8: { calories: 260, fat: 7, protein: 17, carbs: 37 }, // lentils
    9: { calories: 35, fat: 2.5, protein: 2, carbs: 1 }, // Tzatziki
    10: { calories: 45, fat: 2.5, protein: 1, carbs: 4 }, // traditional hummus
    11: { calories: 70, fat: 6, protein: 3, carbs: 1 }, // crazy feta
    12: { calories: 70, fat: 6, protein: 1, carbs: 5 }, // harissa
    13: { calories: 30, fat: 1, protein: 1, carbs: 4 }, // red pepper hummus
    14: { calories: 50, fat: 4.5, protein: 0, carbs: 2 }, // roasted eggplant dip
    15: { calories: 160, fat: 8, protein: 23, carbs: 1 }, // steak
    16: { calories: 260, fat: 14, protein: 26, carbs: 7 }, // honey chicken
    17: { calories: 250, fat: 13, protein: 28, carbs: 3 }, // grilled chicken
    18: { calories: 350, fat: 26, protein: 6, carbs: 24 }, // falafel
    19: { calories: 300, fat: 22, protein: 24, carbs: 3 }, // lamb meatballs
    20: { calories: 210, fat: 12, protein: 24, carbs: 2 }, // braised lamb
    21: { calories: 100, fat: 4.5, protein: 3, carbs: 14 }, // roast vegetables
    22: { calories: 35, fat: 2.5, protein: 1, carbs: 2 }, // fiery broccoli
    23: { calories: 45, fat: 3, protein: 1, carbs: 5 }, // fire roasted corn
    24: { calories: 160, fat: 15, protein: 2, carbs: 9 }, // avocado
    25: { calories: 20, fat: 0, protein: 0, carbs: 5 }, // pickled onions
    26: { calories: 5, fat: 0, protein: 0, carbs: 0 }, // salt brined pickles
    27: { calories: 20, fat: 2, protein: 0, carbs: 2 }, // tomate + onion
    28: { calories: 10, fat: 0, protein: 0, carbs: 2 }, // tomato + cucumber
    29: { calories: 35, fat: 3, protein: 0, carbs: 2 }, // cabbage slaw
    30: { calories: 50, fat: 4.5, protein: 0, carbs: 2 }, // olives
    31: { calories: 15, fat: 1, protein: 0, carbs: 1 }, // persian cucumbers
    32: { calories: 5, fat: 0, protein: 0, carbs: 1 }, // shredded romaine
    33: { calories: 35, fat: 2.5, protein: 3, carbs: 0 }, // crumbled feta
    34: { calories: 90, fat: 4.5, protein: 1, carbs: 10 }, // pita crisp
    35: { calories: 60, fat: 4, protein: 0, carbs: 7 }, // balsamic date
    36: { calories: 30, fat: 2, protein: 2, carbs: 1 }, // yogurt dill
    37: { calories: 70, fat: 6, protein: 2, carbs: 4 }, // lemon herb
    38: { calories: 130, fat: 14, protein: 0, carbs: 1 }, // greek vinaigrette
    39: { calories: 180, fat: 20, protein: 0, carbs: 0 }, // garlic dressing
    40: { calories: 80, fat: 9, protein: 0, carbs: 1 }, // skhug
    41: { calories: 90, fat: 8, protein: 2, carbs: 3 }, // tahini caesar
    42: { calories: 70, fat: 7, protein: 0, carbs: 2 }, // hot harissa vinaigrette
    43: { calories: 320, fat: 6, protein: 13, carbs: 53 }, // Pita
    44: { calories: 80, fat: 2, protein: 3, carbs: 13 }, // side pita
    45: { calories: 280, fat: 8, protein: 10, carbs: 40 }, // pita chips
  };

  // State to manage which circles are selected
  const [selectedCircles, setSelectedCircles] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
    45: false,
  });

  // State to manage visibility of serving options
  const [visibleItems, setVisibleItems] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
    44: false,
    45: false,
  });

  // State to manage serving sizes
  const [servingSizes, setServingSizes] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 1,
    14: 1,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 1,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 1,
    28: 1,
    29: 1,
    30: 1,
    31: 1,
    32: 1,
    33: 1,
    34: 1,
    35: 1,
    36: 1,
    37: 1,
    38: 1,
    39: 1,
    40: 1,
    41: 1,
    42: 1,
    43: 1,
    44: 1,
    45: 1,
  });

  // Calculate total macros based on selected items and their serving sizes
  const [totalMacros, setTotalMacros] = useState(() => {
    const initialTotalMacros = Object.keys(itemMacros).reduce(
      (acc, key) => {
        const item = itemMacros[key];
        const isSelected = selectedCircles[key];
        const servingSize = servingSizes[key] || 1; // Default to 1 if not set

        if (isSelected) {
          return {
            calories: acc.calories + item.calories * servingSize,
            fat: acc.fat + item.fat * servingSize,
            protein: acc.protein + item.protein * servingSize,
            carbs: acc.carbs + item.carbs * servingSize,
          };
        }

        return acc;
      },
      { calories: 0, fat: 0, protein: 0, carbs: 0 }
    );
    return initialTotalMacros;
  });

  // Update total macros whenever serving sizes or selectedCircles change
  useEffect(() => {
    const newTotalMacros = Object.keys(itemMacros).reduce(
      (acc, key) => {
        const item = itemMacros[key];
        const isSelected = selectedCircles[key];
        const servingSize = servingSizes[key] || 1; // Default to 1 if not set

        if (isSelected) {
          return {
            calories: acc.calories + item.calories * servingSize,
            fat: acc.fat + item.fat * servingSize,
            protein: acc.protein + item.protein * servingSize,
            carbs: acc.carbs + item.carbs * servingSize,
          };
        }

        return acc;
      },
      { calories: 0, fat: 0, protein: 0, carbs: 0 }
    );
    setTotalMacros(newTotalMacros);
  }, [servingSizes, selectedCircles]);

  // Toggle function for circle selection and servingAmount visibility
  const handleCircleClick = (itemId) => {
    setSelectedCircles((prevSelectedCircles) => {
      const newSelection = !prevSelectedCircles[itemId];
      setVisibleItems((prevVisibleItems) => ({
        ...prevVisibleItems,
        [itemId]: newSelection, // Show serving options if item is selected
      }));
      return {
        ...prevSelectedCircles,
        [itemId]: newSelection,
      };
    });
  };

  // Handle serving size change
  const handleServingSizeChange = (itemId, size) => {
    setServingSizes((prevServingSizes) => ({
      ...prevServingSizes,
      [itemId]: size,
    }));
  };

  return (
    <>
      <div className="fixedContainer">
        <div className="header">
          <div className="leftGrid">
            <a className="logo" href="https://cava.com/" target="_blank">
              CAVA
            </a>

            <a
              href="https://cava.com/"
              target="_blank"
              className="hoverUnderline"
            >
              Home
            </a>
            <h2 className="redirect underline">Calculator</h2>
            <a
              href="https://assets.ctfassets.net/kugm9fp9ib18/1XpFAqpNlQAlYvOzRa1npq/d7905c2398870d7db617685c28f68150/CAVA_SUM24_REC_GID_ALLERGREG_NUTRI_NoRightRice.pdf"
              target="_blank"
              className="hoverUnderline"
            >
              PDF
            </a>
          </div>
          <div className="rightGrid">
            <a
              href="https://s3.amazonaws.com/cava-catering-media/media/CAVA_Catering_Menu.pdf"
              target="_blank"
              className="menuButton"
            >
              Menu
            </a>
          </div>
        </div>

        <div className="macroSummary">
          <div className="selectionContainer">
            <div className="optionContainer">
              {/* <h1 className="smaller">Calculate</h1> */}
              <h1 className="selectedOption">CAVA</h1>
              <h1 className="notSelectedOption">Calculator</h1>
            </div>
          </div>
          <div className="seperatingLine"></div>
          <div className="macrosContainer">
            <p className="bigger">{totalMacros.calories} cal</p>
            <div className="macro">
              <h2>{totalMacros.fat}g</h2>
              <p>Fat</p>
            </div>
            <div className="macro">
              <h2>{totalMacros.protein}g</h2>
              <p>Protein</p>
            </div>
            <div className="macro">
              <h2>{totalMacros.carbs}g</h2>
              <p>Carbs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mealBuilder">
        <div className="foodSection">
          <div className="row">
            <h1>GREENS + GRAINS</h1>
            <p>Calories</p>
            <p>Fat</p>
            <p>Protein</p>
            <p>Carbs</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(1)}
                style={{
                  backgroundColor: selectedCircles[1]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="spinach.PNG" style={{ width: "50px" }} alt="Spinach" />

              <div className="wordContainer" data-id="1">
                <h2>Baby Spinach</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[1] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[1] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(1, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[1] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(1, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[1].calories * servingSizes[1]} cal
            </p>
            <p>{itemMacros[1].fat * servingSizes[1]}g</p>
            <p className="fillBackground">
              {itemMacros[1].protein * servingSizes[1]}g
            </p>
            <p>{itemMacros[1].carbs * servingSizes[1]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(2)}
                style={{
                  backgroundColor: selectedCircles[2]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="arugala.PNG" style={{ width: "50px" }} alt="Arugula" />

              <div className="wordContainer" data-id="2">
                <h2>Arugula</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[2] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[2] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(2, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[2] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(2, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[2].calories * servingSizes[2]} cal
            </p>
            <p>{itemMacros[2].fat * servingSizes[2]}g</p>
            <p className="fillBackground">
              {itemMacros[2].protein * servingSizes[2]}g
            </p>
            <p>{itemMacros[2].carbs * servingSizes[2]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(3)}
                style={{
                  backgroundColor: selectedCircles[3]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="romaine.PNG"
                style={{ width: "50px" }}
                alt="Romaine Lettuce"
              />

              <div className="wordContainer" data-id="3">
                <h2>Romaine</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[3] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[3] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(3, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[3] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(3, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[3].calories * servingSizes[3]} cal
            </p>
            <p>{itemMacros[3].fat * servingSizes[3]}g</p>
            <p className="fillBackground">
              {itemMacros[3].protein * servingSizes[3]}g
            </p>
            <p>{itemMacros[3].carbs * servingSizes[3]}g</p>
          </div>

          {/* new row */}
          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(4)}
                style={{
                  backgroundColor: selectedCircles[4]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="splendid.PNG"
                style={{ width: "50px" }}
                alt="Splendid Greens"
              />

              <div className="wordContainer" data-id="4">
                <h2>Splendid Greens</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[4] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[4] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(4, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[4] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(4, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[4].calories * servingSizes[4]} cal
            </p>
            <p>{itemMacros[4].fat * servingSizes[4]}g</p>
            <p className="fillBackground">
              {itemMacros[4].protein * servingSizes[4]}g
            </p>
            <p>{itemMacros[4].carbs * servingSizes[4]}g</p>
          </div>
          {/* end new row */}
          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(5)}
                style={{
                  backgroundColor: selectedCircles[5]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="superGreens.PNG"
                style={{ width: "50px" }}
                alt="Super Greens"
              />

              <div className="wordContainer" data-id="5">
                <h2>Super Greens</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[5] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[5] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(5, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[5] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(5, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[5].calories * servingSizes[5]} cal
            </p>
            <p>{itemMacros[5].fat * servingSizes[5]}g</p>
            <p className="fillBackground">
              {itemMacros[5].protein * servingSizes[5]}g
            </p>
            <p>{itemMacros[5].carbs * servingSizes[5]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(6)}
                style={{
                  backgroundColor: selectedCircles[6]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="saffron.PNG"
                style={{ width: "50px" }}
                alt="Saffron Basmati Rice"
              />

              <div className="wordContainer" data-id="6">
                <h2>Saffron Basmati Rice</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[6] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[6] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(6, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[6] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(6, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[6].calories * servingSizes[6]} cal
            </p>
            <p>{itemMacros[6].fat * servingSizes[6]}g</p>
            <p className="fillBackground">
              {itemMacros[6].protein * servingSizes[6]}g
            </p>
            <p>{itemMacros[6].carbs * servingSizes[6]}g</p>
          </div>
          {/* new row */}
          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(7)}
                style={{
                  backgroundColor: selectedCircles[7]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="brown.PNG" style={{ width: "50px" }} alt="Brown Rice" />

              <div className="wordContainer" data-id="7">
                <h2>Brown Rice</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[7] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[7] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(7, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[7] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(7, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[7].calories * servingSizes[7]} cal
            </p>
            <p>{itemMacros[7].fat * servingSizes[7]}g</p>
            <p className="fillBackground">
              {itemMacros[7].protein * servingSizes[7]}g
            </p>
            <p>{itemMacros[7].carbs * servingSizes[7]}g</p>
          </div>
          {/* lentils row */}
          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(8)}
                style={{
                  backgroundColor: selectedCircles[8]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="lentils.PNG" style={{ width: "50px" }} alt="Lentils" />

              <div className="wordContainer" data-id="8">
                <h2>Black Lentils</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[8] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[8] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(8, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[8] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(8, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[8].calories * servingSizes[8]} cal
            </p>
            <p>{itemMacros[8].fat * servingSizes[8]}g</p>
            <p className="fillBackground">
              {itemMacros[8].protein * servingSizes[8]}g
            </p>
            <p>{itemMacros[8].carbs * servingSizes[8]}g</p>
          </div>
        </div>
        {/* new section */}
        <div className="foodSection">
          <div className="row">
            <h1>DIPS + SPREADS</h1>
            <p>Calories</p>
            <p>Fat</p>
            <p>Protein</p>
            <p>Carbs</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(9)}
                style={{
                  backgroundColor: selectedCircles[9]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="tzatziki.PNG"
                style={{ width: "50px" }}
                alt="tzatziki"
              />

              <div className="wordContainer" data-id="9">
                <h2>Tzatziki</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[9] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[9] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(9, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[9] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(9, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[9].calories * servingSizes[9]} cal
            </p>
            <p>{itemMacros[9].fat * servingSizes[9]}g</p>
            <p className="fillBackground">
              {itemMacros[9].protein * servingSizes[9]}g
            </p>
            <p>{itemMacros[9].carbs * servingSizes[9]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(10)}
                style={{
                  backgroundColor: selectedCircles[10]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="hummus.PNG"
                style={{ width: "50px" }}
                alt="traditional hummus"
              />

              <div className="wordContainer" data-id="10">
                <h2>Traditional Hummus</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[10] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[10] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(10, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[10] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(10, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[10].calories * servingSizes[10]} cal
            </p>
            <p>{itemMacros[10].fat * servingSizes[10]}g</p>
            <p className="fillBackground">
              {itemMacros[10].protein * servingSizes[10]}g
            </p>
            <p>{itemMacros[10].carbs * servingSizes[10]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(11)}
                style={{
                  backgroundColor: selectedCircles[11]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="feta.PNG" style={{ width: "50px" }} alt="crazy feta" />

              <div className="wordContainer" data-id="11">
                <h2>Crazy Feta</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[11] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[11] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(11, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[11] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(11, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[11].calories * servingSizes[11]} cal
            </p>
            <p>{itemMacros[11].fat * servingSizes[11]}g</p>
            <p className="fillBackground">
              {itemMacros[11].protein * servingSizes[11]}g
            </p>
            <p>{itemMacros[11].carbs * servingSizes[11]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(12)}
                style={{
                  backgroundColor: selectedCircles[12]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="harissa.PNG" style={{ width: "50px" }} alt="harissa" />

              <div className="wordContainer" data-id="12">
                <h2>Harissa</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[12] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[12] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(12, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[12] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(12, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[12].calories * servingSizes[12]} cal
            </p>
            <p>{itemMacros[12].fat * servingSizes[12]}g</p>
            <p className="fillBackground">
              {itemMacros[12].protein * servingSizes[12]}g
            </p>
            <p>{itemMacros[12].carbs * servingSizes[12]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(13)}
                style={{
                  backgroundColor: selectedCircles[13]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="redPepper.PNG"
                style={{ width: "50px" }}
                alt="red pepper hummus"
              />

              <div className="wordContainer" data-id="13">
                <h2>Red Pepper Hummus</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[13] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[13] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(13, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[13] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(13, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[13].calories * servingSizes[13]} cal
            </p>
            <p>{itemMacros[13].fat * servingSizes[13]}g</p>
            <p className="fillBackground">
              {itemMacros[13].protein * servingSizes[13]}g
            </p>
            <p>{itemMacros[13].carbs * servingSizes[13]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(14)}
                style={{
                  backgroundColor: selectedCircles[14]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="eggplant.PNG"
                style={{ width: "50px" }}
                alt="roasted egg plant"
              />

              <div className="wordContainer" data-id="14">
                <h2>Roasted Eggplant Dip</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[14] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[14] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(14, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[14] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(14, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[14].calories * servingSizes[14]} cal
            </p>
            <p>{itemMacros[14].fat * servingSizes[14]}g</p>
            <p className="fillBackground">
              {itemMacros[14].protein * servingSizes[14]}g
            </p>
            <p>{itemMacros[14].carbs * servingSizes[14]}g</p>
          </div>
        </div>

        {/* mains section */}
        <div className="foodSection">
          <div className="row">
            <h1>MAINS</h1>
            <p>Calories</p>
            <p>Fat</p>
            <p>Protein</p>
            <p>Carbs</p>
          </div>

          {/* 15-21 */}
          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(15)}
                style={{
                  backgroundColor: selectedCircles[15]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="steak.PNG" style={{ width: "50px" }} alt="steak" />

              <div className="wordContainer" data-id="15">
                <h2>Grilled Steak</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[15] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[15] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(15, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[15] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(15, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[15].calories * servingSizes[15]} cal
            </p>
            <p>{itemMacros[15].fat * servingSizes[15]}g</p>
            <p className="fillBackground">
              {itemMacros[15].protein * servingSizes[15]}g
            </p>
            <p>{itemMacros[15].carbs * servingSizes[15]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(16)}
                style={{
                  backgroundColor: selectedCircles[16]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="honeyChicken.PNG"
                style={{ width: "50px" }}
                alt="Harissa Honey Chicken"
              />

              <div className="wordContainer" data-id="16">
                <h2>Harissa Honey Chicken</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[16] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[16] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(16, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[16] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(16, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[16].calories * servingSizes[16]} cal
            </p>
            <p>{itemMacros[16].fat * servingSizes[16]}g</p>
            <p className="fillBackground">
              {itemMacros[16].protein * servingSizes[16]}g
            </p>
            <p>{itemMacros[16].carbs * servingSizes[16]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(17)}
                style={{
                  backgroundColor: selectedCircles[17]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="chicken.PNG"
                style={{ width: "50px" }}
                alt="Grilled Chicken"
              />

              <div className="wordContainer" data-id="17">
                <h2>Grilled Chicken</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[17] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[17] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(17, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[17] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(17, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[17].calories * servingSizes[17]} cal
            </p>
            <p>{itemMacros[17].fat * servingSizes[17]}g</p>
            <p className="fillBackground">
              {itemMacros[17].protein * servingSizes[17]}g
            </p>
            <p>{itemMacros[17].carbs * servingSizes[17]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(18)}
                style={{
                  backgroundColor: selectedCircles[18]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="falafel.PNG" style={{ width: "50px" }} alt="falafel" />

              <div className="wordContainer" data-id="18">
                <h2>Falafel</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[18] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[18] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(18, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[18] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(18, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[18].calories * servingSizes[18]} cal
            </p>
            <p>{itemMacros[18].fat * servingSizes[18]}g</p>
            <p className="fillBackground">
              {itemMacros[18].protein * servingSizes[18]}g
            </p>
            <p>{itemMacros[18].carbs * servingSizes[18]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(19)}
                style={{
                  backgroundColor: selectedCircles[19]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="meatball.PNG"
                style={{ width: "50px" }}
                alt="Spicy Lamb Meatballs"
              />

              <div className="wordContainer" data-id="19">
                <h2>Spicy Lamb Meatballs</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[19] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[19] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(19, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[19] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(19, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[19].calories * servingSizes[19]} cal
            </p>
            <p>{itemMacros[19].fat * servingSizes[19]}g</p>
            <p className="fillBackground">
              {itemMacros[19].protein * servingSizes[19]}g
            </p>
            <p>{itemMacros[19].carbs * servingSizes[19]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(20)}
                style={{
                  backgroundColor: selectedCircles[20]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="lamb.PNG"
                style={{ width: "50px" }}
                alt="Braised Lamb"
              />

              <div className="wordContainer" data-id="20">
                <h2>Braised Lamb</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[20] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[20] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(20, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[20] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(20, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[20].calories * servingSizes[20]} cal
            </p>
            <p>{itemMacros[20].fat * servingSizes[20]}g</p>
            <p className="fillBackground">
              {itemMacros[20].protein * servingSizes[20]}g
            </p>
            <p>{itemMacros[20].carbs * servingSizes[20]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(21)}
                style={{
                  backgroundColor: selectedCircles[21]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="roastVegetables.PNG"
                style={{ width: "50px" }}
                alt="Roasted Vegetables"
              />

              <div className="wordContainer" data-id="21">
                <h2>Roasted Vegetables</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[21] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[21] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(21, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[21] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(21, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[21].calories * servingSizes[21]} cal
            </p>
            <p>{itemMacros[21].fat * servingSizes[21]}g</p>
            <p className="fillBackground">
              {itemMacros[21].protein * servingSizes[21]}g
            </p>
            <p>{itemMacros[21].carbs * servingSizes[21]}g</p>
          </div>

          {/* toppings section */}
          <div className="foodSection">
            <div className="row">
              <h1>TOPPINGS</h1>
              <p>Calories</p>
              <p>Fat</p>
              <p>Protein</p>
              <p>Carbs</p>
            </div>

            {/* Copy 2 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(22)}
                  style={{
                    backgroundColor: selectedCircles[22]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="broccoli.PNG"
                  style={{ width: "50px" }}
                  alt="brocoli"
                />

                <div className="wordContainer" data-id="22">
                  <h2>Fiery Broccoli</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[22] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[22] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(22, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[22] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(22, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[22].calories * servingSizes[22]} cal
              </p>
              <p>{itemMacros[22].fat * servingSizes[22]}g</p>
              <p className="fillBackground">
                {itemMacros[22].protein * servingSizes[22]}g
              </p>
              <p>{itemMacros[22].carbs * servingSizes[22]}g</p>
            </div>

            {/* Copy 3 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(23)}
                  style={{
                    backgroundColor: selectedCircles[23]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img src="corn.PNG" style={{ width: "50px" }} alt="corn" />

                <div className="wordContainer" data-id="23">
                  <h2>Fire-Roasted Corn</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[23] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[23] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(23, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[23] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(23, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[23].calories * servingSizes[23]} cal
              </p>
              <p>{itemMacros[23].fat * servingSizes[23]}g</p>
              <p className="fillBackground">
                {itemMacros[23].protein * servingSizes[23]}g
              </p>
              <p>{itemMacros[23].carbs * servingSizes[23]}g</p>
            </div>

            {/* Copy 4 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(24)}
                  style={{
                    backgroundColor: selectedCircles[24]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="avocado.PNG"
                  style={{ width: "50px" }}
                  alt="avocado"
                />

                <div className="wordContainer" data-id="24">
                  <h2>Avocado</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[24] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[24] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(24, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[24] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(24, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[24].calories * servingSizes[24]} cal
              </p>
              <p>{itemMacros[24].fat * servingSizes[24]}g</p>
              <p className="fillBackground">
                {itemMacros[24].protein * servingSizes[24]}g
              </p>
              <p>{itemMacros[24].carbs * servingSizes[24]}g</p>
            </div>

            {/* Copy 5 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(25)}
                  style={{
                    backgroundColor: selectedCircles[25]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="pickledOnion.PNG"
                  style={{ width: "50px" }}
                  alt="pickled onion"
                />

                <div className="wordContainer" data-id="25">
                  <h2>Pickled Onion</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[25] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[25] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(25, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[25] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(25, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[25].calories * servingSizes[25]} cal
              </p>
              <p>{itemMacros[25].fat * servingSizes[25]}g</p>
              <p className="fillBackground">
                {itemMacros[25].protein * servingSizes[25]}g
              </p>
              <p>{itemMacros[25].carbs * servingSizes[25]}g</p>
            </div>

            {/* Copy 6 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(26)}
                  style={{
                    backgroundColor: selectedCircles[26]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="saltPickles.PNG"
                  style={{ width: "50px" }}
                  alt="salt brined pickles"
                />

                <div className="wordContainer" data-id="26">
                  <h2>Salt-Brined Pickles</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[26] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[26] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(26, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[26] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(26, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[26].calories * servingSizes[26]} cal
              </p>
              <p>{itemMacros[26].fat * servingSizes[26]}g</p>
              <p className="fillBackground">
                {itemMacros[26].protein * servingSizes[26]}g
              </p>
              <p>{itemMacros[26].carbs * servingSizes[26]}g</p>
            </div>

            {/* Copy 7 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(27)}
                  style={{
                    backgroundColor: selectedCircles[27]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="tomatoOnion.PNG"
                  style={{ width: "50px" }}
                  alt="tomato + onion"
                />

                <div className="wordContainer" data-id="27">
                  <h2>Tomato + Onion</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[27] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[27] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(27, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[27] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(27, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[27].calories * servingSizes[27]} cal
              </p>
              <p>{itemMacros[27].fat * servingSizes[27]}g</p>
              <p className="fillBackground">
                {itemMacros[27].protein * servingSizes[27]}g
              </p>
              <p>{itemMacros[27].carbs * servingSizes[27]}g</p>
            </div>

            {/* Copy 8 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(28)}
                  style={{
                    backgroundColor: selectedCircles[28]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="tomatoCucumber.PNG"
                  style={{ width: "50px" }}
                  alt="tomato + cucumber"
                />

                <div className="wordContainer" data-id="28">
                  <h2>Tomato + Cucumber</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[28] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[28] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(28, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[28] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(28, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[28].calories * servingSizes[28]} cal
              </p>
              <p>{itemMacros[28].fat * servingSizes[28]}g</p>
              <p className="fillBackground">
                {itemMacros[28].protein * servingSizes[28]}g
              </p>
              <p>{itemMacros[28].carbs * servingSizes[28]}g</p>
            </div>

            {/* Copy 9 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(29)}
                  style={{
                    backgroundColor: selectedCircles[29]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="coleslaw.PNG"
                  style={{ width: "50px" }}
                  alt="coleslaw"
                />

                <div className="wordContainer" data-id="29">
                  <h2>Cabbage Slaw</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[29] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[29] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(29, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[29] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(29, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[29].calories * servingSizes[29]} cal
              </p>
              <p>{itemMacros[29].fat * servingSizes[29]}g</p>
              <p className="fillBackground">
                {itemMacros[29].protein * servingSizes[29]}g
              </p>
              <p>{itemMacros[29].carbs * servingSizes[29]}g</p>
            </div>

            {/* Copy 10 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(30)}
                  style={{
                    backgroundColor: selectedCircles[30]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img src="olives.PNG" style={{ width: "50px" }} alt="olives " />

                <div className="wordContainer" data-id="30">
                  <h2>Kalamata Olives</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[30] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[30] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(30, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[30] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(30, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[30].calories * servingSizes[30]} cal
              </p>
              <p>{itemMacros[30].fat * servingSizes[30]}g</p>
              <p className="fillBackground">
                {itemMacros[30].protein * servingSizes[30]}g
              </p>
              <p>{itemMacros[30].carbs * servingSizes[30]}g</p>
            </div>

            {/* Copy 11 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(31)}
                  style={{
                    backgroundColor: selectedCircles[31]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="persianCucumber.PNG"
                  style={{ width: "50px" }}
                  alt="persian cucumbers"
                />

                <div className="wordContainer" data-id="31">
                  <h2>Persian Cucumber</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[31] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[31] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(31, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[31] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(31, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[31].calories * servingSizes[31]} cal
              </p>
              <p>{itemMacros[31].fat * servingSizes[31]}g</p>
              <p className="fillBackground">
                {itemMacros[31].protein * servingSizes[31]}g
              </p>
              <p>{itemMacros[31].carbs * servingSizes[31]}g</p>
            </div>
            {/* Copy 1 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(32)}
                  style={{
                    backgroundColor: selectedCircles[32]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="romaine.PNG"
                  style={{ width: "50px" }}
                  alt="shredded romaine"
                />

                <div className="wordContainer" data-id="32">
                  <h2>Shredded Romaine</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[32] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[32] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(32, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[32] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(32, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[32].calories * servingSizes[32]} cal
              </p>
              <p>{itemMacros[32].fat * servingSizes[32]}g</p>
              <p className="fillBackground">
                {itemMacros[32].protein * servingSizes[32]}g
              </p>
              <p>{itemMacros[32].carbs * servingSizes[32]}g</p>
            </div>

            {/* Copy 2 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(33)}
                  style={{
                    backgroundColor: selectedCircles[33]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="crumbledFeta.PNG"
                  style={{ width: "50px" }}
                  alt="crumbled feta"
                />

                <div className="wordContainer" data-id="33">
                  <h2>Crumbled Feta</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[33] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[33] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(33, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[33] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(33, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[33].calories * servingSizes[33]} cal
              </p>
              <p>{itemMacros[33].fat * servingSizes[33]}g</p>
              <p className="fillBackground">
                {itemMacros[33].protein * servingSizes[33]}g
              </p>
              <p>{itemMacros[33].carbs * servingSizes[33]}g</p>
            </div>

            {/* Copy 3 */}
            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(34)}
                  style={{
                    backgroundColor: selectedCircles[34]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="pitaCrisps.PNG"
                  style={{ width: "50px" }}
                  alt="Pita Crisps"
                />

                <div className="wordContainer" data-id="34">
                  <h2>Pita Crisps</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[34] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[34] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(34, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[34] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(34, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[34].calories * servingSizes[34]} cal
              </p>
              <p>{itemMacros[34].fat * servingSizes[34]}g</p>
              <p className="fillBackground">
                {itemMacros[34].protein * servingSizes[34]}g
              </p>
              <p>{itemMacros[34].carbs * servingSizes[34]}g</p>
            </div>
          </div>

          <div className="foodSection">
            <div className="row">
              <h1>DRESSINGS</h1>
              <p>Calories</p>
              <p>Fat</p>
              <p>Protein</p>
              <p>Carbs</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(35)}
                  style={{
                    backgroundColor: selectedCircles[35]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="balsamicDate.PNG"
                  style={{ width: "50px" }}
                  alt="balsamic date vinaigrette"
                />

                <div className="wordContainer" data-id="35">
                  <h2>Balsamic Date Vinaigrette</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[35] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[35] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(35, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[35] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(35, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[35].calories * servingSizes[35]} cal
              </p>
              <p>{itemMacros[35].fat * servingSizes[35]}g</p>
              <p className="fillBackground">
                {itemMacros[35].protein * servingSizes[35]}g
              </p>
              <p>{itemMacros[35].carbs * servingSizes[35]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(36)}
                  style={{
                    backgroundColor: selectedCircles[36]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="yogurt.PNG"
                  style={{ width: "50px" }}
                  alt="yogurt dill"
                />

                <div className="wordContainer" data-id="36">
                  <h2>Yogurt Dill</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[36] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[36] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(36, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[36] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(36, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[36].calories * servingSizes[36]} cal
              </p>
              <p>{itemMacros[36].fat * servingSizes[36]}g</p>
              <p className="fillBackground">
                {itemMacros[36].protein * servingSizes[36]}g
              </p>
              <p>{itemMacros[36].carbs * servingSizes[36]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(37)}
                  style={{
                    backgroundColor: selectedCircles[37]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="lemonHerbTahini.PNG"
                  style={{ width: "50px" }}
                  alt="lemon herb tahini"
                />

                <div className="wordContainer" data-id="37">
                  <h2>Lemon Herb Tahini</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[37] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[37] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(37, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[37] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(37, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[37].calories * servingSizes[37]} cal
              </p>
              <p>{itemMacros[37].fat * servingSizes[37]}g</p>
              <p className="fillBackground">
                {itemMacros[37].protein * servingSizes[37]}g
              </p>
              <p>{itemMacros[37].carbs * servingSizes[37]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(38)}
                  style={{
                    backgroundColor: selectedCircles[38]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="greekVin.PNG"
                  style={{ width: "50px" }}
                  alt="Greek Vinaigrette"
                />

                <div className="wordContainer" data-id="38">
                  <h2>Greek Vinaigrette</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[38] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[38] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(38, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[38] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(38, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[38].calories * servingSizes[38]} cal
              </p>
              <p>{itemMacros[38].fat * servingSizes[38]}g</p>
              <p className="fillBackground">
                {itemMacros[38].protein * servingSizes[38]}g
              </p>
              <p>{itemMacros[38].carbs * servingSizes[38]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(39)}
                  style={{
                    backgroundColor: selectedCircles[39]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="garlic.PNG"
                  style={{ width: "50px" }}
                  alt="garlic dressing"
                />

                <div className="wordContainer" data-id="39">
                  <h2>Garlic Dressing</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[39] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[39] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(39, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[39] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(39, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[39].calories * servingSizes[39]} cal
              </p>
              <p>{itemMacros[39].fat * servingSizes[39]}g</p>
              <p className="fillBackground">
                {itemMacros[39].protein * servingSizes[39]}g
              </p>
              <p>{itemMacros[39].carbs * servingSizes[39]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(40)}
                  style={{
                    backgroundColor: selectedCircles[40]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img src="Skhug.PNG" style={{ width: "52px" }} alt="skhug" />

                <div className="wordContainer" data-id="40">
                  <h2>Skhug</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[40] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[40] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(40, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[40] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(40, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[40].calories * servingSizes[40]} cal
              </p>
              <p>{itemMacros[40].fat * servingSizes[40]}g</p>
              <p className="fillBackground">
                {itemMacros[40].protein * servingSizes[40]}g
              </p>
              <p>{itemMacros[40].carbs * servingSizes[40]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(41)}
                  style={{
                    backgroundColor: selectedCircles[41]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="tahiniCaesar.PNG"
                  style={{ width: "50px" }}
                  alt="tahini caesar"
                />

                <div className="wordContainer" data-id="41">
                  <h2>Tahini Caesar</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[41] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[41] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(41, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[41] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(41, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[41].calories * servingSizes[41]} cal
              </p>
              <p>{itemMacros[41].fat * servingSizes[41]}g</p>
              <p className="fillBackground">
                {itemMacros[41].protein * servingSizes[41]}g
              </p>
              <p>{itemMacros[41].carbs * servingSizes[41]}g</p>
            </div>

            <div className="row">
              <div className="pictureContainer">
                <div
                  className="circle"
                  onClick={() => handleCircleClick(42)}
                  style={{
                    backgroundColor: selectedCircles[42]
                      ? "#f3d03e"
                      : "transparent",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </div>

                <img
                  src="hotHarrisaVin.PNG"
                  style={{ width: "50px" }}
                  alt="hot harrisa vinaigrette"
                />

                <div className="wordContainer" data-id="42">
                  <h2>Hot Harrisa Vinaigrette</h2>
                  <div
                    className="servingAmount"
                    style={{ display: visibleItems[42] ? "flex" : "none" }}
                  >
                    <h2
                      className={`servingButton normalServing ${
                        servingSizes[42] === 1 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(42, 1)}
                    ></h2>
                    <p>Normal</p>
                    <h2
                      className={`servingButton margin doubleServing ${
                        servingSizes[42] === 2 ? "selectedServing" : ""
                      }`}
                      onClick={() => handleServingSizeChange(42, 2)}
                    ></h2>
                    <p>Double</p>
                  </div>
                </div>
              </div>
              <p className="fillBackground">
                {itemMacros[42].calories * servingSizes[42]} cal
              </p>
              <p>{itemMacros[42].fat * servingSizes[42]}g</p>
              <p className="fillBackground">
                {itemMacros[42].protein * servingSizes[42]}g
              </p>
              <p>{itemMacros[42].carbs * servingSizes[42]}g</p>
            </div>
          </div>
        </div>

        <div className="foodSection">
          <div className="row">
            <h1>SIDES</h1>
            <p>Calories</p>
            <p>Fat</p>
            <p>Protein</p>
            <p>Carbs</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(43)}
                style={{
                  backgroundColor: selectedCircles[43]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img src="Pita.PNG" style={{ width: "70px" }} alt="Pita" />

              <div className="wordContainer" data-id="43">
                <h2>Pita</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[43] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[43] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(43, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[43] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(43, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[43].calories * servingSizes[43]} cal
            </p>
            <p>{itemMacros[43].fat * servingSizes[43]}g</p>
            <p className="fillBackground">
              {itemMacros[43].protein * servingSizes[43]}g
            </p>
            <p>{itemMacros[43].carbs * servingSizes[43]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(44)}
                style={{
                  backgroundColor: selectedCircles[44]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="sidePita.PNG"
                style={{ width: "60px" }}
                alt="side Pita"
              />

              <div className="wordContainer" data-id="44">
                <h2>Side Pita</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[44] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[44] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(44, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[44] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(44, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[44].calories * servingSizes[44]} cal
            </p>
            <p>{itemMacros[44].fat * servingSizes[44]}g</p>
            <p className="fillBackground">
              {itemMacros[44].protein * servingSizes[44]}g
            </p>
            <p>{itemMacros[44].carbs * servingSizes[44]}g</p>
          </div>

          <div className="row">
            <div className="pictureContainer">
              <div
                className="circle"
                onClick={() => handleCircleClick(45)}
                style={{
                  backgroundColor: selectedCircles[45]
                    ? "#f3d03e"
                    : "transparent",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <img
                src="pitaChips.PNG"
                style={{ width: "60px" }}
                alt="Pita Chips"
              />

              <div className="wordContainer" data-id="45">
                <h2>Pita Chips</h2>
                <div
                  className="servingAmount"
                  style={{ display: visibleItems[45] ? "flex" : "none" }}
                >
                  <h2
                    className={`servingButton normalServing ${
                      servingSizes[45] === 1 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(45, 1)}
                  ></h2>
                  <p>Normal</p>
                  <h2
                    className={`servingButton margin doubleServing ${
                      servingSizes[45] === 2 ? "selectedServing" : ""
                    }`}
                    onClick={() => handleServingSizeChange(45, 2)}
                  ></h2>
                  <p>Double</p>
                </div>
              </div>
            </div>
            <p className="fillBackground">
              {itemMacros[45].calories * servingSizes[45]} cal
            </p>
            <p>{itemMacros[45].fat * servingSizes[45]}g</p>
            <p className="fillBackground">
              {itemMacros[45].protein * servingSizes[45]}g
            </p>
            <p>{itemMacros[45].carbs * servingSizes[45]}g</p>
          </div>
        </div>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
