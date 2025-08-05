import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Penna in Teverina",
    canonical: links.autospurgo["penna-in-teverina"],
});
export default withBaseProps({ 
    title: "Autospurgo Penna in Teverina", 
    locationNames: {label: "Penna in Teverina", href: "penna-in-teverina"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
