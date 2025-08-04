import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature San Giovanni Valdarno",
  canonical: links.servizi["pulizia-fognature"]["san-giovanni-valdarno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
