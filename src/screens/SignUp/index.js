import React, { useEffect } from "react";
import Toast from "react-native-toast-message";
import {
  Container,
  FormContainer,
  Title,
  BackButton,
  BackButtonIcon,
} from "./styles";
import { SvgXml } from "react-native-svg";
import colors from "~/styles/colors";
import { Image, Dimensions } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "~/components/Input";
import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/Button";
import { signupRequest } from "~/store/modules/user/actions";

const width = Dimensions.get("screen").width;

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.payme.theme);
  const loadingSignUp = useSelector((state) => state.user.loadingSignUp);
  const background1 =
    appTheme === "light" ? `${colors.primaryColor}BB` : `${colors.black}BB`;
  const background2 =
    appTheme === "light" ? `${colors.white}` : `${colors.black}`;
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="160 300 340 1000" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="${background1}" d="M0 0l1403 0 0 938c-761,-204 -819,451 -1403,291l0 -1229z"/><path fill="${background2}" d="M1403 894l0 40c-761,-203 -819,452 -1403,291l0 -331 0 357 1403 0 0 -357 0 0z"/></svg>`;
  const SvgImage = () => (
    <>
      <Image
        source={{
          uri:
            "https://www.easybooksapp.com/hubfs/2019%20C3%20Small%20Business%20Templates/Blog%2023%20X%20Reasons%20Why%20Cash%20Flow%20is%20Important%20to%20a%20Small%20Business.jpeg",
        }}
        style={{
          width: width,
          height: width - 20,
          position: "absolute",
          top: 0,
        }}
      />
      <SvgXml
        xml={svgMarkup}
        width={width}
        height={width}
        style={{ position: "absolute", top: 0 }}
      />
    </>
  );

  const FormSchema = Yup.object().shape({
    name: Yup.string().required("Your name is required."),
    email: Yup.string().email().required("Your email is required."),
    password: Yup.string().required("Your password is required.").min(6),
    confirPassword: Yup.string()
      .required("The password confirmation is required.")
      .oneOf([Yup.ref("password"), null], "Passwords must match."),
  });

  return (
    <Container appTheme={appTheme} keyboardShouldPersistTaps="handled">
      <SvgImage />

      <FormContainer>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirPassword: "",
          }}
          onSubmit={(values) =>
            dispatch(signupRequest(values.name, values.email, values.password))
          }
          validationSchema={() => FormSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <>
              <Input
                autoCapitalize="words"
                placeholder="e.g. John Doe"
                placeholderTextColor={colors.inactiveBlack}
                color={
                  appTheme === "light" ? colors.primaryColor : colors.white
                }
                value={values.name}
                onChangeText={handleChange("name")}
                title="Name"
                errorText={errors.name && touched.name ? errors.name : null}
              />

              <Input
                placeholder="e.g. john@email.com"
                autoCapitalize="none"
                placeholderTextColor={colors.inactiveBlack}
                color={
                  appTheme === "light" ? colors.primaryColor : colors.white
                }
                value={values.email}
                onChangeText={handleChange("email")}
                title="Email"
                errorText={errors.email && touched.email ? errors.email : null}
              />

              <Input
                secureTextEntry
                placeholderTextColor={colors.inactiveBlack}
                color={
                  appTheme === "light" ? colors.primaryColor : colors.white
                }
                value={values.password}
                onChangeText={handleChange("password")}
                title="Password"
                errorText={
                  errors.password && touched.password ? errors.password : null
                }
              />

              <Input
                secureTextEntry
                placeholderTextColor={colors.inactiveBlack}
                color={
                  appTheme === "light" ? colors.primaryColor : colors.white
                }
                value={values.confirPassword}
                onChangeText={handleChange("confirPassword")}
                title="Confirm your password"
                errorText={
                  errors.confirPassword && touched.confirPassword
                    ? errors.confirPassword
                    : null
                }
              />

              <Button
                text="Register"
                background={colors.primaryColor}
                icon="person-add-outline"
                loading={loadingSignUp}
                action={handleSubmit}
              />
            </>
          )}
        </Formik>
      </FormContainer>

      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonIcon />
      </BackButton>

      <Title appTheme={appTheme}>Create your account</Title>
    </Container>
  );
}
