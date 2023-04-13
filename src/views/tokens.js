import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import ComponentControls from "../components/componentControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css";
import Panel from "../components/panel";
import tokens from '../utilities/tokens'
import JSONPretty from 'react-json-pretty';
import createCssVariables from '../utilities/createCssVariables';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const myTheme = {
  main: 'line-height:1.3;color:var(--Gray400);background:var(--appBackground);overflow:auto;',
  error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
  key: 'color:#0896A3;',
  string: 'color:#4C3EAB;',
  value: 'color:#A34908;',
  boolean: 'color:#ac81fe;',
}

const Tokens = (props) => {
  
  const CssVars = createCssVariables(tokens)
  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          Token controls...
          <ul>
            <li>Pixels, Rems, Pt, other</li>
            <li>Custom naming systems?</li>
            <li>What else?</li>
          </ul>
        </Panel>

        <main>
            <Tabs>
              <TabList> 
                <Tab>W3C tokens</Tab>
                <Tab>CSS variables</Tab>
              </TabList>
              <TabPanel>
                  <JSONPretty data={tokens} theme={myTheme}/>
              </TabPanel>
              <TabPanel>
                {JSON.stringify(CssVars)}
              </TabPanel>
            </Tabs>
        </main>
    </div>
    </>
  )
}

export default Tokens;
