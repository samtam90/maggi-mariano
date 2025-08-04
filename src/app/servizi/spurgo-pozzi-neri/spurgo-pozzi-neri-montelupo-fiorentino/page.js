import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montelupo Fiorentino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});