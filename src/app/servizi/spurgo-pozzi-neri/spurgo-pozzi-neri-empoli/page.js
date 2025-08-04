import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Empoli",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});