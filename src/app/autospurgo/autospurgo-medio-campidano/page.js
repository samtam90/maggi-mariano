import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Medio Campidano",
    canonical: links.autospurgo["medio-campidano"],
});
export default withBaseProps({ 
    title: "Autospurgo Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["medio-campidano"],
        name: "Medio Campidano",
    }),
});
