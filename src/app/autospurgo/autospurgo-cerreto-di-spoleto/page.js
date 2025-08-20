import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cerreto di Spoleto",
    canonical: links.autospurgo["cerreto-di-spoleto"],
});
export default withBaseProps({ 
    title: "Autospurgo Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
