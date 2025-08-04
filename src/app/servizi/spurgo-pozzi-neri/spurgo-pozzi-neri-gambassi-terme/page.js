import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gambassi Terme",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"}  
});