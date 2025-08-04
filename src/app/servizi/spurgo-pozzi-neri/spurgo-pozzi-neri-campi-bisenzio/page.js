import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Campi Bisenzio",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});