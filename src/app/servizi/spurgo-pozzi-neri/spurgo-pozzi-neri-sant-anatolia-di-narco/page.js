import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sant'Anatolia di Narco",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});