import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Colle di Val d'Elsa",
    canonical: links.autospurgo["colle-di-val-d-elsa"],
});
export default withBaseProps({ 
    title: "Autospurgo Colle di Val d'Elsa", 
    locationNames: {label: "Colle di Val d'Elsa", href: "colle-di-val-d-elsa"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
