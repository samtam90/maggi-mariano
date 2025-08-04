import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Palazzuolo sul Senio",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"}  
});