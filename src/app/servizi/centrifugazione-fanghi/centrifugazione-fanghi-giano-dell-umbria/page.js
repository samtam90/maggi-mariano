import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Giano dell'Umbria",
  canonical: links.servizi["centrifugazione-fanghi"]["giano-dell-umbria"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Giano dell'Umbria",
  locationNames: { label: "Giano dell'Umbria", href: "giano-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
