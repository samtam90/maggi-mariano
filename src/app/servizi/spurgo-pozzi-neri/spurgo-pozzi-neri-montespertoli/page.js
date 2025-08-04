import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montespertoli",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});