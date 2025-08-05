import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castelfiorentino",
    canonical: links.autospurgo["castelfiorentino"],
});
export default withBaseProps({ 
    title: "Autospurgo Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
