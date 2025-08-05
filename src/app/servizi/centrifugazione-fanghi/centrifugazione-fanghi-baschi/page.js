import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Baschi",
  canonical: links.servizi["centrifugazione-fanghi"]["baschi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Baschi",
  locationNames: { label: "Baschi", href: "baschi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
