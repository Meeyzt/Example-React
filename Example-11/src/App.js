import "./App.css";
import Box from "./components/Box";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import messages from "./messages.json";

function App() {
  return (
    <div className="App">
      <IntlProvider
        messages={messages("tr-TR")}
        locale="tr-TR"
        defaultLocale="tr-TR"
      >
        <Box FormattedMessage={{ FormattedMessage }} />
      </IntlProvider>
    </div>
  );
}

export default App;
