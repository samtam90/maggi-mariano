import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bologna",
  canonical: links.servizi["disidratazione-fanghi"]["bologna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bologna",
  locationNames: { label: "Bologna", href: "bologna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
