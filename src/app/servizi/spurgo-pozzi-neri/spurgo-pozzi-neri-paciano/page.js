import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Paciano",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});