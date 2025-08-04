import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Figline Valdarno",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});