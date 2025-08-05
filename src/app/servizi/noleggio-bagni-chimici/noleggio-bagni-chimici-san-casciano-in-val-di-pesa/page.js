import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Casciano in Val di Pesa",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-casciano-in-val-di-pesa"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Casciano in Val di Pesa",
  locationNames: { label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
