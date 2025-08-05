import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Casole d'Elsa",
    canonical: links.autospurgo["casole-d-elsa"],
});
export default withBaseProps({ 
    title: "Autospurgo Casole d'Elsa", 
    locationNames: {label: "Casole d'Elsa", href: "casole-d-elsa"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
