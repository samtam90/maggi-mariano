import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Oristano",
    canonical: links.autospurgo["oristano"],
});
export default withBaseProps({ 
    title: "Autospurgo Oristano", 
    locationNames: {label: "Oristano", href: "oristano"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["oristano"],
        name: "Oristano",
    }),
});
