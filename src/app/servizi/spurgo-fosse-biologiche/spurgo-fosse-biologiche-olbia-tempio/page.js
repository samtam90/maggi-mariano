import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Olbia-Tempio",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});
