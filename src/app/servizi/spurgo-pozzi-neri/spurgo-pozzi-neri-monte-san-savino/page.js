import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monte San Savino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});