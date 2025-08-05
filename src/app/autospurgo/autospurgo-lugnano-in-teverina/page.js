import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Lugnano in Teverina",
    canonical: links.autospurgo["lugnano-in-teverina"],
});
export default withBaseProps({ 
    title: "Autospurgo Lugnano in Teverina", 
    locationNames: {label: "Lugnano in Teverina", href: "lugnano-in-teverina"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
