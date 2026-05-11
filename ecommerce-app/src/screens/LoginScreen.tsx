import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../store/authSlice";
import CustomInput from "../components/CustomInput";
import { sendLocalNotification } from "../utils/notifications";

const LoginScreen = () => {
  const dispatch = useDispatch<any>();
  const auth = useSelector((state: any) => state.auth);
  const { loading } = useSelector((state: any) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    let valid = true;
    if (!email.includes("@")) {
      setEmailError("Invalid email");
      valid = false;
    }
    if (password.length < 7) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!valid) return;

    await dispatch((loginAsync as any)({ email, password, token: "verified" }));
    // await sendLocalNotification();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Email */}
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
      />

      {/* Password */}
      <CustomInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={passwordError}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {" "}
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Login"}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "#777",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  button: {
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
