import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Attigliano",
  canonical: links.servizi["centrifugazione-fanghi"]["attigliano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Attigliano",
  locationNames: { label: "Attigliano", href: "attigliano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
