import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Olbia-Tempio",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});