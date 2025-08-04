import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Giovanni Valdarno",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-giovanni-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});