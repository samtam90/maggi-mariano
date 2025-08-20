import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Roncofreddo",
    canonical: links.autospurgo["roncofreddo"],
});
export default withBaseProps({ 
    title: "Autospurgo Roncofreddo", 
    locationNames: {label: "Roncofreddo", href: "roncofreddo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
