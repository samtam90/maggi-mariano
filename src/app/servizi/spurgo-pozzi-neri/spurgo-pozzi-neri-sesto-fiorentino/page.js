import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sesto Fiorentino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});