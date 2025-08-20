import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Fossato di Vico",
    canonical: links.autospurgo["fossato-di-vico"],
});
export default withBaseProps({ 
    title: "Autospurgo Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
