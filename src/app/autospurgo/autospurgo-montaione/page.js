import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montaione",
    canonical: links.autospurgo["montaione"],
});
export default withBaseProps({ 
    title: "Autospurgo Montaione", 
    locationNames: {label: "Montaione", href: "montaione"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
