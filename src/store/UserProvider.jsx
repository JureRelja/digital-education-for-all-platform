import React, { createContext } from "react";

const UserContext = createContext({
  RIASEC: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
  OIB: "",
});

export { UserContext };

import { useState } from "react";

function UserProvider(props) {
  const [RIASEC, setRIASEC] = useState({});
  const [OIB, setOIB] = useState("");

  const changeRIASEC = (RIASEC) => {
    setRIASEC(RIASEC);
  };

  const changeOIB = (OIB) => {
    setOIB(OIB);
  };

  const context = {
    OIB,
    changeOIB,
    RIASEC,
    changeRIASEC: changeRIASEC,
  };

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
