import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import CupertinoSearchBarWithMic from "../components/CupertinoSearchBarWithMic";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Image
          source={require("../assets/images/Bez.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.loremIpsum}>Eat what makes you happy</Text>
      <View style={styles.iconRow}>
        <EntypoIcon name="location" style={styles.icon}></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="barcode-scan"
          style={styles.icon6}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 1 4.58" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={1}
            cy={2}
            rx={1}
            ry={2}
          ></Ellipse>
        </Svg>
        <CupertinoSearchBarWithMic
          style={styles.cupertinoSearchBarWithMic}
        ></CupertinoSearchBarWithMic>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.image3StackStackRow}>
            <View style={styles.image3StackStack}>
              <View style={styles.image3Stack}>
                <ImageBackground
                  source={require("../assets/images/nood.png")}
                  resizeMode="contain"
                  style={styles.image3}
                  imageStyle={styles.image3_imageStyle}
                >
                  <Text style={styles.noodles}>Noodles</Text>
                </ImageBackground>
                <ImageBackground
                  source={require("../assets/images/chole.png")}
                  resizeMode="contain"
                  style={styles.image4}
                  imageStyle={styles.image4_imageStyle}
                >
                  <Text style={styles.choleBhature}>Chole{"\n"}Bhature</Text>
                </ImageBackground>
                <ImageBackground
                  source={require("../assets/images/image_F3vB..png")}
                  resizeMode="contain"
                  style={styles.image8}
                  imageStyle={styles.image8_imageStyle}
                >
                  <Text style={styles.vada}>Vada</Text>
                </ImageBackground>
              </View>
              <ImageBackground
                source={require("../assets/images/image_ja2k..png")}
                resizeMode="contain"
                style={styles.image7}
                imageStyle={styles.image7_imageStyle}
              >
                <Text style={styles.samosa}>Samosa</Text>
              </ImageBackground>
            </View>
            <View style={styles.image5Column}>
              <ImageBackground
                source={require("../assets/images/image_ZlJ6..png")}
                resizeMode="contain"
                style={styles.image5}
                imageStyle={styles.image5_imageStyle}
              >
                <Text style={styles.dosa}>Dosa</Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/image_BEPP..png")}
                resizeMode="contain"
                style={styles.image9}
                imageStyle={styles.image9_imageStyle}
              >
                <Text style={styles.tea}>Tea</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        <ImageBackground
          source={require("../assets/images/image_OVBK..png")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <Text style={styles.paratha}>Paratha</Text>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/images/image_ax9q..png")}
          resizeMode="contain"
          style={styles.image6}
          imageStyle={styles.image6_imageStyle}
        >
          <Text style={styles.idli}>Idli</Text>
        </ImageBackground>
      </View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.icon2ColumnRow}>
            <View style={styles.icon2Column}>
              <FontAwesomeIcon
                name="shopping-bag"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <Text style={styles.order}>Order</Text>
            </View>
            <Text style={styles.goOut}>Go Out</Text>
            <Text style={styles.pro}>Pro</Text>
            <View style={styles.icon5Column}>
              <EntypoIcon name="user" style={styles.icon5}></EntypoIcon>
              <Text style={styles.profile}>Profile</Text>
            </View>
          </View>
        </View>
        <EntypoIcon name="slideshare" style={styles.icon3}></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="professional-hexagon"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 24,
    left: 4,
    width: 356,
    height: 202,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  image: {
    top: 0,
    left: 0,
    width: 365,
    height: 226,
    position: "absolute"
  },
  rectStack: {
    width: 365,
    height: 226,
    marginTop: 180,
    marginLeft: 6
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 20,
    marginLeft: 6
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    height: 44,
    width: 40
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 258
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -405,
    marginLeft: 6,
    marginRight: 31
  },
  ellipse: {
    top: 0,
    left: 4,
    width: 1,
    height: 5,
    position: "absolute"
  },
  cupertinoSearchBarWithMic: {
    height: 44,
    width: 360,
    position: "absolute",
    left: 0,
    top: 0
  },
  ellipseStack: {
    width: 360,
    height: 44,
    marginTop: 16,
    marginLeft: 6
  },
  rect2: {
    top: 0,
    left: 9,
    width: 356,
    height: 174,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  image3: {
    top: 0,
    left: 0,
    width: 99,
    height: 87,
    position: "absolute"
  },
  image3_imageStyle: {},
  noodles: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 58,
    marginLeft: 24
  },
  image4: {
    top: 5,
    left: 94,
    width: 90,
    height: 87,
    position: "absolute"
  },
  image4_imageStyle: {},
  choleBhature: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 39,
    marginLeft: 21
  },
  image8: {
    position: "absolute",
    top: 87,
    left: 94,
    height: 87,
    width: 89
  },
  image8_imageStyle: {},
  vada: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 57,
    marginLeft: 29
  },
  image3Stack: {
    top: 0,
    left: 0,
    width: 184,
    height: 174,
    position: "absolute"
  },
  image7: {
    position: "absolute",
    top: 88,
    left: 9,
    height: 86,
    width: 84
  },
  image7_imageStyle: {},
  samosa: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 56,
    marginLeft: 16
  },
  image3StackStack: {
    width: 184,
    height: 174
  },
  image5: {
    height: 87,
    width: 93
  },
  image5_imageStyle: {},
  dosa: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 58,
    marginLeft: 26
  },
  image9: {
    height: 86,
    width: 89,
    marginTop: 1
  },
  image9_imageStyle: {},
  tea: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 56,
    marginLeft: 35
  },
  image5Column: {
    width: 93
  },
  image3StackStackRow: {
    height: 174,
    flexDirection: "row",
    marginLeft: 79
  },
  image2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 87,
    width: 99
  },
  image2_imageStyle: {},
  paratha: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 58,
    marginLeft: 17
  },
  image6: {
    position: "absolute",
    top: 88,
    left: 3,
    height: 86,
    width: 94
  },
  image6_imageStyle: {},
  idli: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 58,
    marginLeft: 29
  },
  rect2Stack: {
    width: 365,
    height: 174,
    marginTop: 310,
    marginLeft: 6
  },
  rect3: {
    top: 2,
    left: 0,
    width: 375,
    height: 64,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  order: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 4,
    marginLeft: 3
  },
  icon2Column: {
    width: 40
  },
  goOut: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 16,
    width: 72,
    marginLeft: 57,
    marginTop: 42
  },
  pro: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 40,
    marginLeft: 28,
    marginTop: 42
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  profile: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 8,
    width: 40
  },
  icon5Column: {
    width: 40,
    marginLeft: 41,
    marginBottom: 9
  },
  icon2ColumnRow: {
    height: 61,
    flexDirection: "row",
    marginLeft: 26,
    marginRight: 31
  },
  icon3: {
    top: 0,
    left: 123,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  icon4: {
    top: 1,
    left: 213,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  rect3Stack: {
    width: 375,
    height: 66,
    marginTop: 64
  }
});

export default Untitled;
