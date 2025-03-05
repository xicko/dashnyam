"use client";

import React, { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import { browserName, osName, deviceType } from "react-device-detect";

interface GrabberType {
  children: React.ReactNode;
}

const GrabberContext: React.FC<GrabberType> = ({ children }) => {
  const [ip, setIp] = useState<string>("");
  const parser = new UAParser();
  const userAgent = navigator.userAgent;
  const parsedData = parser.setUA(userAgent).getResult();

  const userAgentDetails = parsedData.ua;
  const deviceInfo = parsedData.device;
  const osInfo = parsedData.os;
  const browserInfo = parsedData.browser;

  useEffect(() => {
    async function logUserInfo(ip: string) {
      await fetch("/api/grabber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          browser: `BROWSER NAME:${browserName}, BROWSER Info: ${browserInfo}`,
          useragent: `USERAGENT: ${userAgent}`,
          deviceinfo: `OS NAME: ${osName}, DEVICE TYPE: ${deviceType}, OSINFO NAME: ${osInfo.name}, OSVERSION: ${osInfo.version}, DEVICEINFO MODEL: ${deviceInfo.model}, DEVICEINFO VENDOR: ${deviceInfo.vendor}`,
          ipaddress: ip ?? "Null",
          visited_at: new Date().toISOString(),
        }),
      });
    }

    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
        logUserInfo(data.ip);
      });
  }, [
    osInfo.name,
    osInfo.version,
    userAgent,
    userAgentDetails,
    ip,
    browserInfo,
    deviceInfo.model,
    deviceInfo.vendor,
  ]);

  return <>{children}</>;
};

export default GrabberContext;
