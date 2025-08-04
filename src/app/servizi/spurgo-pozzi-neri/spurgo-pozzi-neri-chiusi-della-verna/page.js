import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chiusi della Verna",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});